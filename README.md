# Live Streamer
LiveStreamer is a decentralized streaming platform that gives viewers generative NFT and allows them to support the creators through subscriptions. Various technologies are incorporated into the platform to provide users with a comprehensive and engaging experience. As the platform's underlying infrastructure, Livepeer supports scalable and low-cost live streaming to a global audience.

<hr/>

On LiveStreamer, streamers are able to create a new stream using Livepeer. They have the option to upload an NFT to accompany their stream. The stream data, along with any related URLs and information for future NFT generation, is stored in IPF. The IPFS hash is then stored on the blockchain as an ERC721 token, using Polygon blockchain. This allows for the stream and its associated data to be securely and transparently recorded and stored on the blockchain.

The viewer has the option to generate a viewer NFT through NFTPort, which is minted without the need for gas. The NFT is published to the Polygon blockchain and is generated using an NFT image uploaded from IPFS, the address of the streamer and viewer, and the viewer's avatar if they have set one through ENS. Generative NFTs are created in this manner every time they are requested, allowing for the creation of unique and collectible items for the viewer

## Goals
Some potential goals for the LiveStreamer includes:
- Expanding the user base: One potential goal is to increase its user base and attract more streamers and viewers to the platform. To make the platform more appealing to potential users, marketing efforts and outreach can be undertaken, as well as adding new features and continuously improving the platform.
- User engagement and retention: A key goal for any platform is to keep users engaged and coming back to the platform. LiveStreamer could aim to increase user engagement and retention through the implementation of new features which aim towards better interaction between creators and audience.
- Innovation and differentiation: As the live streaming space is highly competitive, LiveStreamer may aim to differentiate itself from other platforms through the implementation of innovative and unique features. This could help the platform stand out in the market and attract a dedicated user base.

# Technology we used



## Streamer

- creates a new stream using livepeer
- optionally can upload an NFT 
- stream data is stored in ipfs using Pinata (livestream related urls + Future viewer NFT generation data)
- ipfs hash is stored in the blockchain as an ERC721 token (Kovan, Polygon)
- all previous streams are fetched using Covalent API for faster data fetch 

## Viewer 

- donate to the streamer using Superfluid sdk (works only on Kovan) - 5$ per month. 
- Viewer NFT generated without gas minting done via NFTPort and published to Polygon
- generative NFTs are everytime generated using NFT image uploaded from ipfs, address of streamer and viewer (avatar is added if ENS is set) 


# Deployments



<!-- ## Streamer NFT 
Polygon : https://polygonscan.com/token/0xe3fe2ce72be1074528812924cfc9abad0d3ac898
Kovan: https://kovan.etherscan.io/address/0x806ff7b2e5ef0a3984e2601d7506655264bf31c5


## Sample viewer NFT using NFT Port 
https://polygonscan.com/tx/0x0edb781fc267f26f858f362eeb1a5ef35e932b9748ead197be2f1e8ca6223f2d -->
