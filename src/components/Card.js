import React, { Component, Fragment } from "react";
import Form from './Form';

export default class Card extends Component {
  render() {
    return (
    <Fragment>
        {/* CARD */}
        <div class="card m-1 m-md-3">
            <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">
                {this.props.description}
            </p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#modal-${this.props.id}`}>
                Edit
            </button>
            <button class="btn btn-danger ms-3">
                Delete
            </button>
            </div>
        </div>

        {/* MODAL */}
        <div class="modal fade" id={`modal-${this.props.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit post</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Form />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </Fragment>
    );
  }
}
