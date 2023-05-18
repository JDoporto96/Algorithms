//Find the Kth largest numbers in an unsorted list.

function count(arr, value){
	let count = 0;	
	for(let i = 0; i < arr.length; i++){
        if(arr[i] > value) count++;
    }
				
	return count;
}
	
function kthSmallest(arr,k){
	let low = arr.reduce((a,b) => Math.min(a, b));k  
	let high = arr.reduce((a,b) => Math.max(a, b));

	while(low < high){
		let mid = Math.floor(low + ((high - low) / 2));
		
		if(count(nums, mid) >= k){
            low = mid + 1;
        }else{
            high = mid;
        }
				
	}
		
	return low;
}
	
	
const nums = [1, 4, 5, 3, 19, 3, 10, 12, 10, 15];
console.log(kthSmallest(nums, 3));
	
