import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export class PostReplyForm extends Component {
  render() {
    // Extract additional class name from props
    const { className } = this.props;

    return (
      <div className={`justify-between  postreplyform ${className}`}>
        <Form className='border border-rose-95 bg-pastelPurple rounded-md '>
          <div className=''>
            <textarea name='postreply' rows={1} placeholder='Health benefits asideI just like the darker aesthetic it brings' className='ml-6 mt-4 mr-14 mb-10 w-96 bg-pastelPurple border-none rounded-md textarea' />
          </div>
        </Form>
        <div>
          <button className='px-6 bg-lilac text-pastelPurple rounded-xl ml-4 font-bold py-3 font-jost'>Post Reply</button>
        </div>
      </div>
    );
  }
}

export default PostReplyForm;
