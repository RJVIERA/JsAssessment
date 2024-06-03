/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirt, _bling) {
   const nft = {
      "name": _name,
      "eyecolor": _eyeColor,
      "shirt":_shirt,
      "bling":_bling
   }
   myNFT.push(nft);
   console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0 ; i < myNFT.length; i++ ){

      console.log("\n ID \t\t" + (i+1));
      console.log("Name: \t\t" + myNFT[i].name);
      console.log("Eye color: \t" + myNFT[i].eyecolor);
      console.log("Shirt: \t\t" + myNFT[i].shirt);
      console.log("Bling:  \t" + (myNFT[i].bling));
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\n "+ myNFT.length);
}

// call your functions below this line
mintNFT("RJ", "yellow", "Haikyuu!!", "Tomoe");
mintNFT("Viera", "Brown", "Haikyuu!!", "Tomoe");
mintNFT("Gabriel", "Blue", "Haikyuu!!", "Tomoe");
listNFTs();
getTotalSupply();
