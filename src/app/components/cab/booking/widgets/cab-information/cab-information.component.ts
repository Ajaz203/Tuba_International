import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cab-information',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="review_box">
      <div class="title-top">
        <h5>Important Information</h5>
      </div>
      <div class="cab-info-content">
        <!-- Documents Required -->
        <div class="info-section">
          <h6><i class="fa fa-file-alt"></i> Documents Required</h6>
          <ul>
            <li>Valid ID proof for verification</li>
            <li>Contact number must be active</li>
            <li>Email ID for booking confirmation</li>
          </ul>
        </div>

        <!-- Cancellation Policy -->
        <div class="info-section">
          <h6><i class="fa fa-ban"></i> Cancellation Policy</h6>
          <ul>
            <li>Free cancellation up to 2 hours before pickup</li>
            <li>50% refund for cancellation within 2 hours</li>
            <li>No refund for no-show</li>
          </ul>
        </div>

        <!-- Terms & Conditions -->
        <div class="info-section">
          <h6><i class="fa fa-info-circle"></i> Terms & Conditions</h6>
          <ul>
            <li>Waiting charges applicable after 15 minutes</li>
            <li>Toll & parking charges extra</li>
            <li>Interstate permits extra if applicable</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .review_box {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.05);
      margin-bottom: 20px;

      .title-top {
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;

        h5 {
          font-size: 18px;
          font-weight: 600;
          color: #2c3e50;
          margin: 0;
        }
      }

      .info-section {
        margin-bottom: 25px;

        &:last-child {
          margin-bottom: 0;
        }

        h6 {
          font-size: 16px;
          color: #2c3e50;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;

          i {
            color: #0091FF;
          }
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            color: #6c757d;
            font-size: 14px;

            &:before {
              content: "•";
              color: #0091FF;
              position: absolute;
              left: 0;
            }

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  `]
})
export class CabInformationComponent {}
