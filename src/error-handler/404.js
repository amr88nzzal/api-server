'use strict';
let err404=(request, response) => {
    response.status(404).json({ error: '404/Not-Found' });
}
module.exports = err404