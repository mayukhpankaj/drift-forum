const ipfsClient = require('ipfs-http-client');

const projectId = '2IOEq4zkmLDOn68qeSREbcxmV0M';
const projectSecret = 'e4e865b992d4a9ddedb1ec7e23dd0138';
// const auth = 'Basic'+ Buffer.from(projectId + ':' + projectSecret).toString('base64');

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
	host: 'ipfs.infura.io',
	port: 5001,
	protocol: 'https',
	headers: {
        authorization: auth,
    },
})

const uploadToIPFS = async <T>(data: T): Promise<string> => {
	const result = await client.add(JSON.stringify(data))

	return result.path
}

export default uploadToIPFS
