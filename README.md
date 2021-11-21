# nodejs-2021Q4

___

## Ciphering CLI Tool

#### [Technical task](https://github.com/rolling-scopes-school/basic-nodejs-course)

#### The CLI Tool for encode and decode you text with Caesar cipher.

> #### `"I came, I saw, I coding."`


Learn more [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

### To use this CLI tool you need: 

1. Clone this repository to your machine.
   You can use.
 
    `git clone https://github.com/Andrei-Red/nodejs-2021Q4.git`
2. Move to nodejs-2021Q4 directory. You need to go th the `task-1` branch.
   
3. Write your own commands to caesar CLI!  
    For example: 

    `my_ciphering_cli -c C1-C1-A-R0`

### Notice: 

1. Valid options are:
   
    CLI tool can accept 3 options (short alias and full name):

    `-c`,` --config`: config for ciphers Config is a string with pattern {XY(-)}n, 
   
    where:

   X is a cipher mark:
    - `C` is for Caesar cipher (with shift 1)
    - `A` is for Atbash cipher (use without Y)
    - `R` is for ROT-8 cipher 
   
   Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    - `1` is for encoding
    - `0` is for decoding
   
     `-i`, `--input`: a path to input file

     `-o`, `--output`: a path to output file

   For example: 
   
    `my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"`

3. You may not use `--input` argument then you need to write your text in the terminal line. After that exit the program `Ctrl + C`. Your encoding or decoding text will be saved in the output file.
4. You may not use `--output` argument  then  you will see encoded or decoded messages in the terminal line.
5. Only English letters will be encoded or decoded.  


### Testing:
   All files are `test` folder

   - `node run test`
   - `node run coverage` for detail testing report

Testing done with requirements:
#### [Technical task](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/testing.md)

___
##### For [The Rolling Scopes School](https://rs.school/) course with
##### Author: [Andrei Denisenko <@Andrei-Red>](https://github.com/Andrei-Red)
