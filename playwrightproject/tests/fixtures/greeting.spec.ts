import {test,expect} from './fixtures';
test('Use my fixture', async({morning_greeting})=>{
    expect(morning_greeting).toBe('Hello, Interview');

})