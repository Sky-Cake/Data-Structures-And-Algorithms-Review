// unsorted array of numbers
let items_List = [60, 40, 30, 5, 90, 10, 20];

bubble_Sort(items_List);
show_Result(items_List);


// implementation of bubble sort algorithm
function bubble_Sort(items_List)
{
    let num1 = 0, num2 = 0;

    // upper boundaries for the for loops
    const limit1 = items_List.length - 1;
    let limit2 = items_List.length - 1;

    for(let i = 0; i <= limit1; i++, limit2--)
    {
        num1 = items_List[0];

        for(let j = 1; j <= limit2; j++)
        {
            num2 = items_List[j];
            
            if(num1 > num2)
            {
                // swap needed
                swap(items_List, num1, j);
            }
            else if(num1 <= num2)
            {
                // no swap needed
                num1 = num2;
            }
        }
    }
}


// this function will swap two elements in an array
function swap(items_List, num1, j)
{
    // store the element with a higher value
    let temp_element = num1;

    // swap elements
    items_List[j - 1] = items_List[j];
    items_List[j] = temp_element;
}


// this function will print the sorted array
function show_Result(items_List)
{
    console.log("The following is the sorted array,");

    for(let i = 0; i < items_List.length; i++)
    {
        console.log(`items_List[${i}] = ${items_List[i]}`);
    } 
}
