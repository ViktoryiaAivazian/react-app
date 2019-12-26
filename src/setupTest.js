import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // для дополнительного кода для конкретной версии реакта

configure({ adapter: new Adapter() });

