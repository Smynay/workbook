import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Character from './Character';

configure({
  adapter: new Adapter(),
});

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Should render 3 characters in light side', () => {
    expect(wrapper.find(Character)).toHaveLength(3);
  });

  it('Should render 2 characters in dark side', () => {
    wrapper.setProps({
      side: 'dark',
    });
    expect(wrapper.find(Character)).toHaveLength(2);
  });
});
