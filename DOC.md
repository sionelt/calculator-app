# DOCUMENTATION
## DESIGN
## CHALLENGES & SOLUTIONS
These are list of major challenges I encountered throughout the project and the solutions I found and learned from that helped solved the problem.

### Responsive to any mobile screen size:
media queries

### Border size less than 1px:
box shadow

### Responsive typography to Screen width:
use function to watch when to shrink

### Updating parent's state from children component:
pass parent method to child and modify state from there
... onClick={this.fun.bind(null,para)}

### Auto scroll to end of right side in overflow mode:
set top.scrollLeft = 600, 600 more than max width.

### Dash sign for minus operator cause line break:
whitespace: nowrap
turns out, browser reads dash sign for minus as hyphens for line break.
whitespace no wrap suppressed line breaks in string.
https://developer.mozilla.org/en-US/docs/Web/CSS/white-space

### Media queries in javascript:

### Display entries in with commas



