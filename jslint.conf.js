// ------------ jslint options ------------
// see http://www.jslint.com/lint.html//options for more detailed explanations

options = {
// "enforce" type options (true means potentially more warnings)

adsafe:   false,     // true if ADsafe rules should be enforced. See http://www.ADsafe.org/
bitwise:  true,      // true if bitwise operators should not be allowed
newcap:   true,      // true if Initial Caps must be used with constructor functions
eqeqeq:   true,     // true if === should be required (for ALL equality comparisons)
immed:    true,     // true if immediate function invocations must be wrapped in parens
nomen:    false,     // true if initial or trailing underscore in identifiers should be forbidden
onevar:   false,     // true if only one var statement per function should be allowed
plusplus: true,     // true if ++ and -- should not be allowed
regexp:   true,     // true if . and [^...] should not be allowed in RegExp literals
safe:     false,     // true if the safe subset rules are enforced (used by ADsafe)
strict:   false,     // true if the ES5 "use strict"; pragma is required
undef:    true,      // true if variables must be declared before used
white:    true,     // true if strict whitespace rules apply (see also 'indent' option)

// "allow" type options (false means potentially more warnings)

cap:      false,     // true if upper case HTML should be allowed
css:      false,      // true if CSS workarounds should be tolerated
debug:    false,     // true if debugger statements should be allowed (set to false before going into production)
es5:      false,     // true if ECMAScript 5 syntax should be allowed
evil:     false,     // true if eval should be allowed
forin:    false,      // true if unfiltered 'for in' statements should be allowed
fragment: true,      // true if HTML fragments should be allowed
laxbreak: false,     // true if statement breaks should not be checked
on:       false,     // true if HTML event handlers (e.g. onclick="...") should be allowed
sub:      false,     // true if subscript notation may be used for expressions better expressed in dot notation

// other options

maxlen:   120,       // Maximum line length
indent:   2,         // Number of spaces that should be used for indentation - used only if 'white' option is set
maxerr:   50,        // The maximum number of warnings reported (per file)
passfail: false,     // true if the scan should stop on first error (per file)
// following are relevant only if undef = true
predef:   ['window','_','haml'],
browser:  true,      // true if the standard browser globals should be predefined
rhino:    false,     // true if the Rhino environment globals should be predefined
windows:  false,     // true if Windows-specific globals should be predefined
widget:   false ,    // true if the Yahoo Widgets globals should be predefined
devel:    false,     // true if functions like alert, confirm, console, prompt etc. are predefined


// ------------ jslint_on_rails custom lint options (switch to true to disable some annoying warnings) ------------

// ignores "missing semicolon" warning at the end of a function; this lets you write one-liners
// like: x.map(function(i) { return i + 1 }); without having to put a second semicolon inside the function
lastsemic: false,

// allows you to use the 'new' expression as a statement (without assignment)
// so you can call e.g. new Ajax.Request(...), new Effect.Highlight(...) without assigning to a dummy variable
newstat: false,

// ignores the "Expected an assignment or function call and instead saw an expression" warning,
// if the expression contains a proper statement and makes sense; this lets you write things like:
//    element && element.show();
//    valid || other || lastChance || alert('OMG!');
//    selected ? show() : hide();
// although these will still cause a warning:
//    element && link;
//    selected ? 5 : 10;
statinexp: false

}