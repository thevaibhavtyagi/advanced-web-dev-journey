// USING INSTALLED PACKAGE ---------
import chalk from 'chalk';

console.log(chalk.blue('Hello, this is blue text!'));
console.log(chalk.red.bold('This is bold red!'));
console.log(chalk.green('✓ Success!'));
console.log(chalk.yellow.bold('⚠ Warning!'));
console.log(chalk.bgBlue.white(' This has a blue background '));


const errorMsg = chalk.red.bold.underline('CRITICAL ERROR');
console.log(errorMsg);