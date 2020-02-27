import PropTypes from 'prop-types'
import React from 'react'
import { setIfMissing } from 'part:@sanity/form-builder/patch-event'
// FormBuilderInput automatically generates fields from a schema
import { FormBuilderInput } from 'part:@sanity/form-builder'
// a Higher Order Component that passes document values as props
import { withDocument } from 'part:@sanity/form-builder'

class ConditionalField extends React.PureComponent {
  static propTypes = {
    type: PropTypes.shape({
      title: PropTypes.string,
      options: PropTypes.shape({
        condition: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
    level: PropTypes.number,
    value: PropTypes.shape({
      _type: PropTypes.string,
    }),
    focusPath: PropTypes.array.isRequired,
    onFocus: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }

  inputRef = React.createRef()

  handleChange = (patchEvent) => {
    const { onChange, type } = this.props
    onChange(
      patchEvent
        .prefixAll(type.title)
        .prepend(setIfMissing({ _type: type.title })),
    )
  }

  focus() {
    this.inputRef.current.focus()
  }

  render() {
    const {
      document,
      type,
      value,
      level,
      focusPath,
      onChange,
      onFocus,
      onBlur,
    } = this.props

    return type.options.condition(document) ? (
      <div style={{ marginBottom: 20 }}>
        <FormBuilderInput
          level={level}
          ref={this.inputRef}
          type={type}
          value={value === undefined ? '' : value}
          onChange={onChange}
          path={[type.title]}
          focusPath={focusPath}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    ) : null
  }
}

export default withDocument(ConditionalField)
