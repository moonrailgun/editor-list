export default {
  EditorClassName: {
    header: 'ClassName Select',
    exclusive: 'Exclusive style',
    common: 'Other style editing on the label',
  },
  EditorState: {
    header: 'Status',
    cursor: 'Mouse cursor status',
    cursorSelect: {
      auto: 'auto',
      pointer: 'pointer',
      crosshair: 'crosshair',
      move: 'move',
      text: 'text',
      wait: 'wait',
      help: 'help',
    },
    style: 'Style status',
    styleSelect: {
      default: 'default',
      hover: 'hover',
      active: 'active',
      focus: 'focus',
    },
  },
  EditorLayout: {
    header: 'Layout',
    name: 'Current display',
    displaySelect: {
      block: 'Displays an element as a block element.',
      flex: 'Displays an element as a block-level flex container.',
      'inline-block': 'Displays an element as an inline-level block container.',
      inline: 'plays an element as an inline element.',
      none: 'The element is completely removed.',
    },
    flexName: {
      alignItems: {
        name: 'Vertical',
        icon: 'column-height',
      },
      justifyContent: {
        name: 'Horizontal',
        icon: 'column-width',
      },
    },
    flexSelect: {
      alignItems: {
        stretch: 'Element are stretched to fit the container.',
        'flex-start': 'Element are positioned at the beginning of the container.',
        center: 'Element are positioned at the center of the container.',
        'flex-end': 'Element are positioned at the end of the container.',
        baseline: 'Element are positioned at the baseline of the container.',
      },
      justifyContent: {
        'flex-start': 'Element are positioned at the beginning of the container.',
        center: 'Element are positioned at the center of the container.',
        'flex-end': 'Element are positioned at the end of the container.',
        'space-between': 'Element are positioned with space between the lines.',
        'space-around': 'Element are positioned with space before, between, and after the lines.',
      },
    },
  },
  EditorFont: {
    header: 'Font',
    font: 'Font family',
    size: 'Size',
    bold: 'Bold',
    lineHeight: 'Line height',
    letterSpacing: 'Letter spacing',
    color: 'Color',
    placeholder: 'Please input',
  },
  EditorInterface: {
    header: 'Interface',
    overflow: 'Overflow',
    overflowSelect: {
      visible: 'visible',
      hidden: 'hidden',
      scroll: 'scroll',
      auto: 'auto',
    },
    width: 'Width',
    height: 'Height',
    position: 'Position',
    positionSelect: {
      static: 'static',
      absolute: 'absolute',
      relative: 'relative',
      fixed: 'fixed',
      sticky: 'sticky',
    },
    position_help: 'Please select the current corresponding positioning. ' +
      'If it is absolute positioning, please turn on the relative positioning of the parent, ' +
      'otherwise it will be positioned with the top level with relative positioning.',
    float: 'Float',
    floatSelect: {
      none: 'none',
      left: 'Left',
      right: 'Right',
    },
    clear: 'Clear Float',
    clearSelect: {
      none: 'None',
      left: 'Left',
      right: 'Right',
      both: 'Both',
    },
    zIndex: 'zIndex, current element depth.',
    opacity: 'opacity',
    opacity_help: 'If opacity is set on the label, the operation will not respond. Note: With animated label, this operation is invalid.',
  },
  EditorBackGround: {
    type: 'Type',
    header: 'Background',
    add: 'Add Image Or Gradient',
    img: 'Image',
    linear: 'Linear Gradient',
    radial: 'Radial Gradient',
    image: 'Image url',
    color: 'Color',
    repeat: 'Repeat',
    position: 'Position',
    position_help: 'Custom values (x, y) can be set, such as: 50px 100px',
    size: 'Size',
    size_help: 'Custom values (width, height) can be set, such as: 50px 100px',
    attachment: 'Attachment',
    repeatSelect: {
      repeat: 'repeat',
      'repeat-x': 'repeat-x',
      'repeat-y': 'repeat-y',
      'no-repeat': 'no-repeat',
    },
    blendMode: 'Filter(blend-mode)',
    blendModeHelp: 'Layer filters are only valid for multiple backgrounds',
    clip: 'Clip',
    clipHelp: 'Set whether the background of the element extends below the border',
    clipSelect: {
      'border-box': 'Start with border',
      'padding-box': 'Start with padding',
      'content-box': 'Start with content',
    },
    barHelp: 'Gradient point drags out the corresponding range (40px), delete the gradient point',
    shape: 'Gradient of circle or ellipse',
    extent: 'Size',
    extentSelect: {
      'farthest-corner': 'The gradient\'s ending shape is sized so that it exactly meets the farthest corner of the box from its center.',
      'farthest-side': 'Similar to closest-side, except the ending shape is sized to meet the side of the box farthest from its center (or vertical and horizontal sides).',
      'closest-corner': 'The gradient\'s ending shape is sized so that it exactly meets the closest corner of the box from its center.',
      'closest-side': 'The gradient\'s ending shape meets the side of the box closest to its center (for circles) or meets both the vertical and horizontal sides closest to the center (for ellipses).',
    },
    radialPosition: "position of the center of a circle",
    repeatGradient: "Repeated Gradient",
    angle: "Angle",
    angleHelp: "Custom values can be set (0 - 360). Note: Units can be selected when the value is not empty."
  },
  EditorBorder: {
    header: 'Border',
    tags: {
      width: 'width',
      color: 'color',
      style: 'style',
      radius: 'radius',
    },
  },
  EditorMargin: {
    header: 'Margin',
    tags: {
      margin: 'margin',
      padding: 'padding',
    },
  },
  EditorShadow: {
    header: 'Shadow',
    tags: {
      boxShadow: 'boxShadow',
      textShadow: 'textShadow',
    },
    switch: 'Switch',
    inner: 'Inner',
    offset: 'Offset',
    blur: 'Blur',
    offset_help: 'The x-axis on the left and the y-axis on the right',
    spread: 'Spread',
    color: 'Color',
  },
  EditorTransition: {
    header: 'Transition',
    name: 'Name',
    time: 'Time',
    ease: 'Ease',
    delay: 'Delay',
  },
  EditorCss: {
    header: 'Code edit',
  },
};
