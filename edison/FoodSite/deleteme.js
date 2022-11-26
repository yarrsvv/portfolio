const num = '+780989995511';
const reg = /(\+38)?(-|\s|()?(050|063|095)(-|\s|))?\d{3}(-|\s)?\d{2}(-|\s)?\d{2}(-|\s)?/;

console.log(reg.test(num));