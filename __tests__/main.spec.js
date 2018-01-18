import renderer from 'react-test-renderer'
import GuageJs from '../src/main'

describe('GuageJs Component', () => {
  it('should render', () => {
    const tree = renderer
      .create(<GuageJs />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  });
})