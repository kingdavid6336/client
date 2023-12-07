import * as React from 'react'
import * as Kb from '@/common-adapters'
import Rm, {type ContentRect} from 'react-measure'
import type {Props} from '.'

class Measure extends React.Component<Props, {width: number}> {
  _width = 0
  _onResize = (contentRect: ContentRect) => {
    if (contentRect.bounds === undefined) return
    if (this._width !== contentRect.bounds.width) {
      this._width = contentRect.bounds.width
      this.props.onMeasured(this._width)
    }
  }

  render() {
    return (
      <Rm bounds={true} onResize={this._onResize}>
        {({measureRef}) => <div ref={measureRef} style={styles.container} />}
      </Rm>
    )
  }
}

const styles = Kb.Styles.styleSheetCreate(() => ({
  container: {width: '100%'},
}))

export default Measure
