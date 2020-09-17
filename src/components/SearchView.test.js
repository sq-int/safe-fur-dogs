import { searchActionCreators } from '../redux/actions/searchActions';

const singleTest = searchActionCreators.singleTest;

// ensuring we can access and test our redux action creators
test('Ensuring action creators can be tested', () => {
    expect(singleTest()).toBe("Hello there!");
});