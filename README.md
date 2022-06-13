# Cron Parser

Cron Parser is a utility which validates and provides a human readable format of the input cron.


## Features

- Supports the mandatory cron expression (minutes   hours   dayOfMonth  month   dayOfWeek)
- For each of the mandatory expression, supports below types:
-- Asterisk (*)
-- Number (3)
-- Comma separated values (,)
-- Step (/)
-- Range (-)
- Validates all the above cron formats for each supported type.
- Provides specific error messages in case there are errors during validation.
- Outputs the cron command in human readable and prettified format


## Local Setup
- Make sure you have nodejs setup locally and commands like 'node' and 'npm' are present in path.
- Checkout the project with below command:
    ```sh
    git clone https://github.com/mjolnir-wielder/cron-parser.git
    ```
- Change directory to the root of the project:
    ```sh
    cd cron-parser
    ```
    
- Run the below command to check:
    ```sh
    node index.js <cron-command>
    ```
- Sample cron commands:
-- "*/15 0 1,15 * 1-5 /usr/bin/find"
