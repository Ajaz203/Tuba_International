import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tour-confirmation-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="show">
      <div class="modal-content">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Tour Booking Confirmed!</h3>
        <div class="booking-details">
          <p class="confirmation-message">Thank you for choosing our service. Your tour booking has been successfully confirmed.</p>
          <div class="booking-info">
            <p><strong>Booking ID:</strong> {{ bookingDetails?.booking_id }}</p>
            <p><strong>Name:</strong> {{ bookingDetails?.name }}</p>
            <p><strong>Destination:</strong> {{ bookingDetails?.destination }}</p>
            <p><strong>Travel Date:</strong> {{ bookingDetails?.travel_date | date:'medium' }}</p>
            <p><strong>Duration:</strong> {{ bookingDetails?.duration }} Days</p>
          </div>
        </div>
        <div class="next-steps">
          <h4>Next Steps:</h4>
          <ul>
            <li>You will receive a confirmation email shortly</li>
            <li>Our tour expert will contact you within 24 hours</li>
            <li>Keep your documents ready for verification</li>
          </ul>
        </div>
        <div class="support-info">
          <p>For any assistance, contact our support:</p>
          <p class="support-contact">
            <i class="fas fa-phone"></i> +91 9643306786
          </p>
        </div>
        <button class="btn-close" (click)="onClose()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1050;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background: white;
      padding: 30px;
      border-radius: 20px;
      width: 90%;
      max-width: 500px;
      position: relative;
      animation: slideIn 0.3s ease;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .success-icon {
      text-align: center;
      margin-bottom: 20px;

      i {
        font-size: 60px;
        color: #28a745;
      }
    }

    h3 {
      text-align: center;
      color: #2c3e50;
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .booking-details {
      margin-bottom: 25px;

      .confirmation-message {
        text-align: center;
        color: #6c757d;
        margin-bottom: 20px;
      }

      .booking-info {
        background: #f8f9fa;
        padding: 15px;
        border-radius: 10px;

        p {
          margin: 8px 0;
          color: #2c3e50;
          
          strong {
            color: #0d6efd;
          }
        }
      }
    }

    .next-steps {
      margin-bottom: 25px;

      h4 {
        font-size: 16px;
        color: #2c3e50;
        margin-bottom: 10px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 8px;
          color: #6c757d;

          &:before {
            content: "✓";
            color: #28a745;
            position: absolute;
            left: 0;
          }
        }
      }
    }

    .support-info {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #eee;

      p {
        margin: 5px 0;
        color: #6c757d;
      }

      .support-contact {
        color: #0d6efd;
        font-size: 18px;
        font-weight: 600;

        i {
          margin-right: 8px;
        }
      }
    }

    .btn-close {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 20px;
      color: #6c757d;
      cursor: pointer;
      padding: 5px;
      transition: all 0.3s ease;

      &:hover {
        color: #dc3545;
        transform: rotate(90deg);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 768px) {
      .modal-content {
        width: 95%;
        padding: 20px;
      }
    }
  `]
})
export class TourConfirmationModalComponent {
  @Input() show = false;
  @Input() bookingDetails: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
} 