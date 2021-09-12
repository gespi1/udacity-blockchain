/**
 * Import crypto-js/SHA256 library
 */
const SHA256 = require('crypto-js/sha256');

/**
 * Class with a constructor for block 
 */
class Block {

	constructor(data){
		this.id = 1;
    this.nonce = 14444;
    this.body = data;
    this.hash = "";
  }
    
    /**
     * Step 1. Implement `generateHash()`
     * method that return the `self` block with the hash.
     * 
     * Create a Promise that resolve with `self` after you create 
     * the hash of the object and assigned to the hash property `self.hash = ...`
     */
  	// 
  generateHash() {
    // Use this to create a temporary reference of the class object
    let self = this;
    //Implement your code here
    return new Promise(function(resolve, reject) {
      self.hash = SHA256(JSON.stringify(self));

      if (self.hash != "") {
        resolve(self);
      }
      else {
        reject(Error("it didnt work"));
      }
    });
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;