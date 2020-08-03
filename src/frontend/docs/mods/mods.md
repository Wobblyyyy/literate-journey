# Mods!
achat's official guide to making, creating, and using mods / extensions to achat.

## Using

## Development 
Developing a mod in achat shouldn't be too difficult - I try to make sure
everything isn't really thaaaat hard to use.
### Using the console
In case you didn't yet know, achat has a console which you can use to do a lot
of pretty cool shit. Your first mod will probably be nothing but a simple
console application, because really, what else are you expecting - anyway, here
we go! achat (conveniently) has a console system which allows you to print messages
and accept commands. 
#### Writing information to the console
##### Types of logs
There's a couple different ways to write to the console. The different types
INCLUDE...
+ SEVERE -
    An error message highlighted in dark red. This is a severe error that may
    potentially break the achat system.
+ ERROR -
    A regular error message - errors which aren't very severely breaking achat.
+ WARN -
    A warning message. Not even an error message, warning messages are useful
    for a bunch of really swaggy things. One such of these things is using
    a depracated piece of code. 
+ LOG -
    A plain old logging message. Nothing too special here.
+ SUCCESS - 
    A message used when things go really well.
##### Actually logging information
You can write information to this console by using the code...
+ Console.severe
+ Console.error
+ Console.warn
+ Console.log
+ Console.success
##### Example
<pre><code>
if (command.label == 'write') {
    command.args.forEach(function (value, index) {
        Console.log('Argument ID: ' + index);
        Console.log('Argument contents: ' + value);
    });
}
</code></pre>
#### Reading information from the console
