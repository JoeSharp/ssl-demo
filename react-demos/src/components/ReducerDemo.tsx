import { useComplexThingValue, ComplexState, ComplexThingContext } from './useComplexThing';
import PersonManager from './PersonManager';
import CounterManager from './CounterManager';

const INITIAL_STATE: ComplexState = {
    counter: 0,
    people: [
        { name: 'Alice', age: 20 },
        { name: 'Bob', age: 34 },
    ]
};

function ReducerDemo() {
    // Create an instance of the API
    const complexThingValue = useComplexThingValue(INITIAL_STATE);

    return (<ComplexThingContext.Provider value={complexThingValue}>
        <h2>Reducer Demo</h2>
        <CounterManager />
        <PersonManager />
    </ComplexThingContext.Provider>
    )
}

export default ReducerDemo;