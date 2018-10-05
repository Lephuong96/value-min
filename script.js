function minArray(arr) {
    if(arr.length == 0)
        return -1;
    var min = arr[0];
    for(var i =1; i< arr.length; i ++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
arr = [3,5,1,8,-3,7,8];
alert(minArray(arr));
arr = [7,12,6,9,20,56,89];
alert(minArray(arr));
arr = [];
alert(minArray(arr));
arr = [0, 0, 0, 0, 0, 0];
alert(minArray(arr));
