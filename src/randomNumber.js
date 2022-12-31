import { uniqueId } from "./uniqueId";

var arr = [];

var num = uniqueId();

if(arr.length==0){
  arr.push(num);
}else {
  for (; arr.length <= arr.length + 1;) {
    num = uniqueId();
    for (j = 0; j <= arr.length; j++) {
      if (num == arr[j]) {
      break;
    }
  }
  arr.push(num);
}
}


