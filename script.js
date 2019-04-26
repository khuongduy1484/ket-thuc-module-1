function finMinSore() {
    let arr =[10,5,2,2,8,-1,6,8];
    let min = arr[0];
    for (let i = 1;i<arr.length;i++){
        if (min > arr[i]){
            min = arr[i];
        }
    } document.write(min);
}
finMinSore();