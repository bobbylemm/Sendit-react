import { configure } from 'enzyme';
import register from 'ignore-styles';
import Adapter from 'enzyme-adapter-react-16';

register(['.css', '.sass', '.scss']);

configure({ adapter: new Adapter() });
