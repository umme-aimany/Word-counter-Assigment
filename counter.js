////////////////////Word Counter/////////////////////
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your  Sentence To Count The Words",
    }
]);
const words = answer.sentence.trim().split(" ");
////////////trim is use to remove white spaces////////////trim start or end sa white spaces ko remove karai ga just
////split is use hmara code ko tarteb sa laka a a goi /////
console.log(words);
//Print the words lenght to console////////////////////
console.log(`Your sentence word count is ${words.length}`);
