import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visa-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="visa-summary">
      <!-- Visa Type Banner -->
      <div class="visa-banner">
        <img src="assets/imges2/breadcrumb1.jpg" alt="Visa Application">
        <div class="visa-type">Tourist Visa</div>
      </div>

      <!-- Processing Time -->
      <div class="quick-info">
        <div class="info-item">
          <i class="fa fa-clock"></i>
          <div>
            <span>Processing Time</span>
            <strong>5-7 Working Days</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-calendar"></i>
          <div>
            <span>Visa Validity</span>
            <strong>6 Months</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-file-alt"></i>
          <div>
            <span>Entry Type</span>
            <strong>Multiple Entry</strong>
          </div>
        </div>
      </div>

      <!-- Visa Fees -->
      <div class="price-details">
        <div class="price-row">
          <span>Visa Fee</span>
          <span>₹8,500</span>
        </div>
        <div class="price-row">
          <span>Processing Fee</span>
          <span>₹1,500</span>
        </div>
        <div class="price-row total">
          <span>Total Amount</span>
          <span>₹10,000</span>
        </div>
      </div>

      <!-- Required Documents -->
      <div class="document-section">
        <h4>Required Documents</h4>
        <ul>
          <li><i class="fa fa-passport"></i> Valid Passport (min. 6 months)</li>
          <li><i class="fa fa-image"></i> Passport Size Photos</li>
          <li><i class="fa fa-building"></i> Bank Statements (3 months)</li>
          <li><i class="fa fa-plane"></i> Flight Reservations</li>
          <li><i class="fa fa-hotel"></i> Hotel Bookings</li>
          <li><i class="fa fa-file-invoice"></i> Income Tax Returns</li>
        </ul>
      </div>

      <!-- Visa Process Steps -->
      <div class="process-steps">
        <h4>Visa Process</h4>
        <div class="steps-grid">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h5>Submit Application</h5>
              <p>Fill the form with required details</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h5>Document Verification</h5>
              <p>We verify your submitted documents</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h5>Visa Processing</h5>
              <p>Application processing at embassy</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h5>Visa Delivery</h5>
              <p>Receive your approved visa</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="important-notes">
        <h4>Important Notes</h4>
        <div class="notes-content">
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>Original passport required during processing</p>
          </div>
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>All documents must be in English</p>
          </div>
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>Processing time may vary based on embassy</p>
          </div>
        </div>
      </div>

      <!-- Support Section -->
      <div class="support-section">
        <h4>Visa Support</h4>
        <div class="support-content">
          <i class="fa fa-headset"></i>
          <div>
            <p>Need assistance with your visa application?</p>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <small>Available Mon-Sat (9 AM - 6 PM)</small>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .visa-summary {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .visa-banner {
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .visa-type {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(13, 110, 253, 0.9);
        color: white;
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
      }
    }

    .quick-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 20px;
      background: #f8f9fa;
      border-bottom: 1px solid #eee;

      .info-item {
        display: flex;
        align-items: center;
        gap: 10px;

        i {
          font-size: 24px;
          color: #0d6efd;
        }

        div {
          display: flex;
          flex-direction: column;

          span {
            font-size: 12px;
            color: #6c757d;
          }

          strong {
            font-size: 14px;
            color: #2c3e50;
          }
        }
      }
    }

    .price-details {
      padding: 20px;
      border-bottom: 1px solid #eee;

      .price-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 14px;
        color: #2c3e50;

        &.total {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 2px solid #f8f9fa;
          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    .document-section {
      padding: 20px;
      border-bottom: 1px solid #eee;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 15px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;

        li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #2c3e50;

          i {
            color: #0d6efd;
            font-size: 16px;
          }
        }
      }
    }

    .process-steps {
      padding: 20px;
      border-bottom: 1px solid #eee;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 20px;
      }

      .steps-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        .step {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 12px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          .step-number {
            width: 30px;
            height: 30px;
            background: #0d6efd;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            flex-shrink: 0;
          }

          .step-content {
            h5 {
              font-size: 14px;
              font-weight: 600;
              color: #2c3e50;
              margin: 0 0 5px;
            }

            p {
              font-size: 13px;
              color: #6c757d;
              margin: 0;
            }
          }
        }
      }
    }

    .important-notes {
      padding: 20px;
      border-bottom: 1px solid #eee;
      background: #f8f9fa;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 15px;
      }

      .notes-content {
        display: grid;
        gap: 12px;

        .note-item {
          display: flex;
          gap: 10px;
          align-items: center;

          i {
            color: #dc3545;
            font-size: 16px;
          }

          p {
            margin: 0;
            font-size: 13px;
            color: #2c3e50;
          }
        }
      }
    }

    .support-section {
      padding: 20px;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 15px;
      }

      .support-content {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        background: #f8f9fa;
        border-radius: 12px;
        border: 1px solid #eee;

        i {
          font-size: 24px;
          color: #28a745;
        }

        div {
          p {
            margin: 0 0 5px;
            font-size: 14px;
            color: #6c757d;
          }

          a {
            display: block;
            color: #0d6efd;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            margin-bottom: 3px;

            &:hover {
              text-decoration: underline;
            }
          }

          small {
            color: #6c757d;
            font-size: 12px;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .quick-info {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .document-section ul {
        grid-template-columns: 1fr;
      }

      .process-steps {
        .steps-grid {
          grid-template-columns: 1fr;
        }
      }
    }
  `]
})
export class VisaDetailsComponent {} 