@@@@@@@   @@@@@@@    @@@@@@   @@@  @@@  @@@  @@@@@@@@  @@@  @@@   @@@@@@@  @@@  @@@
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@  @@@@ @@@  @@@@@@@@  @@@  @@@  @@@@@@@@  @@@  @@@
@@!  @@@  @@!  @@@  @@!  @@@  @@!  @@!@!@@@  @@!       @@!  @@@  !@@       @@!  !@@
!@   @!@  !@!  @!@  !@!  @!@  !@!  !@!!@!@!  !@!       !@!  @!@  !@!       !@!  @!!
@!@!@!@   @!@!!@!   @!@!@!@!  !!@  @!@ !!@!  @!!!:!    @!@  !@!  !@!       @!@@!@!
!!!@!!!!  !!@!@!    !!!@!!!!  !!!  !@!  !!!  !!!!!:    !@!  !!!  !!!       !!@!!!
!!:  !!!  !!: :!!   !!:  !!!  !!:  !!:  !!!  !!:       !!:  !!!  :!!       !!: :!!
:!:  !:!  :!:  !:!  :!:  !:!  :!:  :!:  !:!  :!:       :!:  !:!  :!:       :!:  !:!
 :: ::::  ::   :::  ::   :::   ::   ::   ::   ::       ::::: ::   ::: :::   ::  :::
:: : ::    :   : :   :   : :  :    ::    :    :         : :  :    :: :: :   :   :::

Lightweight, aynchronous, robust, flexible, non-blocking, fleiba, brainfuck interpreter written in javascript.
Inspired by [txus](https://github.com/txus/brainfuck)

## Contents

  * 1 Amazing Nodejs module. Take advantadge of the event loop with brainfuck.
  * 1 Splendid Binary. Brainfuck power on your command line.
  * 1 Awesome brainfuck client for your browser!
  * 1 Replica from the script above... compressed! Less than 400b! OMG!

## Install

    $ npm install node-brainfuck

## Usage

### Nodejs

    var bf = require('node-brainfuck);
    bf(stdout);

### Binary

    $ node-brainfuck hello_world.bf
     H
     e
     l
     l
     ...

### Client

    <script src='brainfuck-client-compressed.js' type='text/javascript'></script>
    <script type='text/javascript'>
      (function () {
        var str = '';
        bf(",>++++++[<-------->-],[<+>-]<.", function(out) {
          if (out === undefined) {
            alert('program output => ' + str);
          } else {
            str += out;
          }
        });
      }());
    </script>

## TODO:

    * Needs testing
    * Some nested brackets don't work properly
    * Somehow expose nodejs stdin so it can be used with any stream reader. (for example, building a http brainfucked server)
    * Have some holidays
