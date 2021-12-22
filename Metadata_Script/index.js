
import fs from "fs";


for (let i = 1; i < 1001; i++) {
    var metadata = {
        name: `nft number: ${i}`,
        description: "Rocket Elevator NFT metadata",
        image: `https://ipfs.io/ipfs/QmWM3BASdERCtS4o5cczZfEbv4pN5NkW3sbx7xkqiS1iXV/${i}.png`,
    };
    fs.writeFile(`metadata/${i}.json`, JSON.stringify(metadata), function (err) {
        if (err) throw err;
        console.log("file worked");
    });

}

