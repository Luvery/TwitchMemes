import React, { Component } from 'react';
import Meme from './Meme';
import { getMemes } from '../utils/jsonWrapper';
import '../styles/memelists.css';

class MemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memeLists: [],
      loading: true,
    };
  }
  async componentDidMount() {
    await this.getAllMemes();
  }
  async getAllMemes() {
    const memes = await getMemes();
    this.setState({ memeLists: memes });
    if (memes !== null) {
      this.setState({ loading: false });
    }
  }

  static renderMemes(memes) {
    return (
      <div className='container'>
        <div className='row'>
          {memes
            .map((printer) => (
              <div key={printer} className='col'>
                <Meme data={printer} />
              </div>
            ))
            .sort((a, b) => a.props.children.props.data.price - b.props.children.props.data.price)}
        </div>
      </div>
    );
  }

  render() {
    const vars = this.state;
    const loaded = !vars.loading;
    let renderThis = null;

    if (loaded) renderThis = <div>{MemeList.renderMemes(vars.memeLists)}</div>;

    return <div>{renderThis}</div>;
  }
}
export default MemeList;
