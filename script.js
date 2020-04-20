'use strict';
 
const todoControl=document.querySelector('.todo-control'),
headerInput=document.querySelector('.header-input'),
todoList=document.querySelector('.todo-list'),
todoCompleted=document.querySelector('.todo-completed'),

todoRemove=document.querySelector('.todo-remove');



let todoData=[
   
];
   if(localStorage.getItem('localData') ){

todoData=JSON.parse(localStorage.getItem ('localData'));
}


const  rederItems=function(){
if(!newTodo.lenght && !todoData.completed.lenght) return
for(let i; i<todoData.value.lenght;i++ ){
    todoData.push (todoData.value[i]);///?????????
}
for(let i; i<todoData.completed.lenght;i++ ){
    todoData.push(todoData.completed[i]); // 
}

};

const dataUpdata=function(){
    localStorage.setItem ('localData', JSON.stringify(todoData));

};





const render = function(){// будет перебирать массив todoData
    
    todoList.textContent='';//
    todoCompleted.textContent='';//очищаем, иначе дублируются  уже имеющиеся дела
    
    todoData.forEach(function (item) {
        //console.log(item); выведет все эдементы -объекты  массива 
        item.value  = item.value .trim();
if(item.value !=''){
    
        const li = document.createElement('li');//добавляем верстку
        li.classList.add('todo-item');
        li.innerHTML='<span class="text-todo">'+ item.value +'</span>'+
        '<div class="todo-buttons">'+
            '<button class="todo-remove"></button>'+
            '<button class="todo-complete"></button>'+
        '</div>';

        if(item.completed===true ){//  вводимое помещается в список невыполненнех дел
            todoCompleted.append(li);
        }
        else{  todoList.append(li);
        }

        const btnTodoComplete=li.querySelector('.todo-complete');// кнопка галочка, котрая перемещает дела в выполненное или невыполненное
        btnTodoComplete.addEventListener('click', function(){//событие
            item.completed =!item.completed;//инверсия true false
            render();
        })

        const btnTodoRemove=li.querySelector('.todo-remove');// кнопка галочка, которая удаляет
        btnTodoRemove.addEventListener('click', function(){//событие
            todoData.splice(todoData.indexOf(item), 1);//splice удаляет!!!?????? спросить  indexOf(2) используется для поиска значений 2 в массиве.
            dataUpdata();
            render();
        })

    }

    });

};

todoControl.addEventListener('submit', function (event) {//sibmit  срабатывает принажатии на кн или enter
    event.preventDefault();// запрет перезагрузки стр при нажатии на кнопку или enter

const newTodo={//новый объект, котрый получаем с ввода наверху
        value:headerInput.value,
        completed: false
        };

    todoData.push( newTodo );//добавляем в todoDat


dataUpdata();

  render();//вызываем функцию чтобы обновились все дела  
  //localStorage.setItem('value', headerInput.value) ;

  
  
  headerInput.value='';

});






render();
//if(localStorage.getItem('localData') ){

//todoData=JSON.parse(localStorage.getItem ('localData'));
//};
