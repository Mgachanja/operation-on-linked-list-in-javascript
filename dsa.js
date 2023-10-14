/** create the node
class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}

//linkedlist
class LinkedList{
    constructor(){
    this.head=null
    this.size=0
    }

    //adding an element at the end of the list
    adding(element){
        //create the new node
        let node=new Node(element)

        //to store current node
        let current

        // travasal to check if list is empty
        if(this.head==null){
            this.head=node
        }
        else{ 
            current=this.head
            //travasal to the end of the list
            while(current.next){
                current=current.next
            }

            //add node at the end
            current.next=node
        }

        this.size++
    }
        //insert at given index
        insertAt(element,index){
            //check if index is valid
            if(index<0||index>this.size){
                return console.log("enter a valid index")
            }
            //create a new node
            let node = new Node(element)
            let curr , prev

            curr= this.head

            //add the element to the first index
            if(index == 0){
                Node.next=this.head
                this.head=Node
            }
            else{
                curr=this.head
                let it=0

                //travase over the list to find where to insert

                while(it<index){
                    it++
                    prev=curr
                    curr=curr.next
                }
                //adding an element
                Node.next=curr
                prev.next=Node
            }

            this.size++


        }
    


    //remove element from a given location
    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("enter a valid index")
        }
        else{
            let curr , prev, it=0
            curr=this.head
            prev=curr

            // deleting first element
            if(index===0){
                this.head=curr.next
            }
            else{
                //iterate over the list to find the position of removal
                while(it<index){
                    it++
                    prev=curr
                    curr=curr.next
                }

                //remove the element
                prev.next=curr.next
            }
            this.size--

            //return the removed element
            return curr.element
        }
    }

    //remove a given element
    removeElement(element){
        let current=this.head
        let prev=null
        //iterate over the list
        while(current!=null){
            //compare all elements in the list with the given element and remove it then return true
            if(current.element=== element){
                if(prev==null){
                    this.head=current.next
                }
                else{
                    prev.next=current.next
                }
                this.size--
                return current.element
            }
            prev=current
            current=current.next
        }
        return -1
    }
  
    ///find index of elements
    indexOf(element){
        let count=0
        current=this.head
         //iterate over the list
         while(current!=null){
            //compare each item in the list with given element
            if(current.element===element){
                return count
            }
            count++
            current=current.next
         }
         //not found
         return -1

    }


isEmpty(){
    return this.size==0
}

sizeOfList(){
    console.log(this.size)
}

printList(){
    let curr=this.head
    let str=""
    while(curr){
        str+=curr.element +""
        curr=curr.next
    }
    console.log(str)
}
}

let ll = new LinkedList()
// testing if list is empty
console.log(ll.isEmpty())


ll.adding(1)
ll.adding(2)
//ll.adding(3)
//ll.adding(4)
//ll.adding(5)
//ll.adding(6)
//ll.adding(7)
//ll.adding(8)
//ll.adding(1)
//ll.adding(2)
//ll.adding(3)
//ll.adding(4)
//ll.adding(5)
//ll.adding(6)


ll.printList()

console.log("remove element"+ ll.removeFrom(7))

ll.printList()

console.log("remove element"+ ll.removeFrom(3))

ll.printList()

console.log("is list empty ?"+ ll.isEmpty())

console.log(ll.removeFrom(3))

ll.printList() 
//---------------------------------------------------------------------ll 2----------------------------------------------
class Node{
    constructor(data,next=null){
        this.data= data
        this.next=next
    }
}

const n1 = new Node(100)
console.log(n1)


class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    //insertion first node
    insertfirst(data){
         this.head= new Node(data , this.head)
        this.size++
    }

    //insert last node
    insertLast(data){
        let node = new Node(data)
        let current
        //if list is empty make head
        if(this.head){
            this.head=node
        }else{
            current=this.head
            while(current.next){
                current=current.next
            } 
            current.next=node
        }
        this.size++
    }
    //insertion at given index
    insertAt(data,index){
        //check if index is valid
        if(index>0&&index>this.size){
            return
        }
        else{
        //if first
        if (index ===0){
            this.head=new Node(data,this.head)
            return
        }
        else{
        let node = new Node(data)
        let current , prev
        current = this.head
        let count =  0
    
        //travase over the list to find where to insert
          while(count<index){
            prev=current //node before index
            count++
            current=current.next //node after index
          }
          node.next=current
          prev.next= node
        }
            
         
    }
}
    //get at given index
    getAt(index){
        let current=this.head
        let count=0
        while(current){
            if(count==index){
                console.log(current.data)
            }
            count++
            current=current.next
        }
        return null
    }
    //remove at given index
    removeAt(index){
        if(index<0&&index>this.size){
            return
        }
        let current = this.head
        let prev=null
        let count=0
        //remove first element
        if(index === 0){
            this.head = current.next
        }
        else{
            while(count<index){
                count++
                prev=current
                current=current.next

          }
          prev.next=current.next
        }
    }
    //clear list
    clearLIst(){
        this.head=null
        this.size=0
    }
    //print list data
    printListData(){
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }

}
let ll = new LinkedList()
ll.insertfirst(1)
ll.insertfirst(2)
ll.insertfirst(3)
//ll.removeAt(2)
ll.insertfirst(4)
//ll.clearLIst()
//ll.insertLast(5)
ll.printListData()

//---------------------------------------------------------------------ll 3-----------------------------------------------
class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    //insert at first
    insertFirst(data){
        let node=new Node(data,this.head)
            this.head=node
            this.size++
        }
    
    insertLast(data){
        let node=new Node(data)
        let current=this.head
        if(!this.head){
            this.head=node
        }
        else{
           while(current.next){
            current=current.next
        }
        current.next=node
        }

            
            this.size++
        }
        insertAt(data,index){
            let node = new Node(data)
            let prev ,count=0
            let current=this.head
            if(index===0){
                this.head=new Node(data,this.head)
            }
            else{
            while(count<index){
                prev=current
                current=current.next
                count++
            }
            prev.next=node
            node.next=current
            }

        }
        getAt(index){
           let current=this.head
            let count=0
            while(count<index){
                current=current.next
                count++
            }
            console.log(current.data)
        }

        removeAt(index){
            let current=this.head
            let count,prev
            while(count<index){
                prev=current
                current=current.next
                count++
            }
            prev.next=current.next
            console.log(`removed element ${current.data}`)
        }

    

        //reverse linked list
        reverse(){
            let current=this.head
            let prev,next
            while(current){
                next=current.next
                current.next=prev
                prev=current
                current=next
            }
            this.head=prev
            
        }


            //print list
        printListData(){
           console.log("the list contains ")
           let current = this.head
           while(current){
              console.log(`${current.data} , `)
              current=current.next
           }
        }

}

let ll = new linkedList()
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertLast(3)
ll.insertLast(5)
ll.insertFirst(6)
ll.printListData()
ll.reverse()
//ll.insertAt(4,1)
/ll.printListData()
//ll.getAt(2)
//ll.removeAt(2)
console.log(ll.head)

**/
//------------------------------------------------------------binary search tree-----------------------------------------


