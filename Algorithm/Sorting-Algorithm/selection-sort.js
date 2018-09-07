/* function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest
}


function selectionSort(Arr) {
    let newArr = [];
    for (let j = 0; j < Arr.length; j++) {
        let smallest =findSmallest(Arr);
        newArr.push(Arr.pop(smallest))
    }
    return newArr
}
console.log(selectionSort([2, 78, 5, 98, 12])); */

var swap = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    };

    this.selectionSort = function(){
        var length = array.length, //{1}
        indexMin;
        for (var i=0; i<length-1; i++){ //{2}
            indexMin = i; //{3}
            for (var j=i; j<length; j++){ //{4}
                if(array[indexMin]>array[j]){ //{5}
                    indexMin = j; //{6}
                 }
            }
        if (i !== indexMin){ //{7}
            swap(i, indexMin);
            }
        }
    };