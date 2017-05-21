import React, { Component } from 'react';

class MessageInput extends Component {
    render() {
        return (   
                <div class="l-input-nav m-input-nav">
                    <textarea class="m-input-nav--textarea l-input-nav--textarea" placeholder="Input message"></textarea>
                    <i class="l-input-nav--file fa fa-file-o fa-2x" aria-hidden="true"></i>
                </div>
        );
    }
}

export default MessageInput;