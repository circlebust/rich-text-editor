
import React from 'react';
import { Editor } from 'slate-react';
import { Value, ValueJSON,ValueProperties } from 'slate';
import styled from '@emotion/styled'

import {
    cloneFragment,
    findDOMNode,
    findDOMRange,
    findNode,
    findRange,
    getEventRange,
    getEventTransfer,
    setEventTransfer,
  } from 'slate-react';


  const renderEditor = () => { 
      return (
            <Editor
            id={String}
            autoCorrect={Boolean}
            autoFocus={Boolean}
            className={String}
            commands={Object}
            onChange={Function}
            placeholder={String | Element}
            plugins={Array}
            queries={Object}
            readOnly={Boolean}
            role={String}
            schema={Object}
            spellCheck={Boolean}
            value={Value}
            style={Object}
            tabIndex={Number}
        />
      )
  }