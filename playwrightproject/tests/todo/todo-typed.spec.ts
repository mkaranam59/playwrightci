import {test} from '@playwright/test';
import {openTodoApp, addTodos, expectTodos}  from '../../utils/todos';

test('adds todos with a typed helper',async({page})=>{

    const titles:string[]= ['Buy milk', 'Read chapter P', 'Write config from memory'];
    await openTodoApp(page);
    await addTodos(page,titles);
    await expectTodos(page,titles);

    

})