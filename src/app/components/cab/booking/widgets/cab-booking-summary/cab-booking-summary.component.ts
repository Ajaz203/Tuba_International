import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cab-booking-summary',
    standalone: true,
  imports: [CommonModule],
  template: `
    <div class="booking-summary">
      <!-- Cab Type Banner -->
      <div class="cab-banner">
      <div class="cab-banner">
        <img src="assets/cab/1.jpg" alt="Cab Service">
        <div class="cab-type">Premium Sedan</div>
      </div>
   <div class="cab-type">Premium Sedan</div>
</div>

      <!-- Quick Info -->
      <div class="quick-info">
        <div class="info-item">
          <i class="fa fa-car"></i>
          <div>
            <span>Vehicle Type</span>
            <strong>AC Sedan</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-users"></i>
          <div>
            <span>Capacity</span>
            <strong>4 Passengers</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-suitcase"></i>
          <div>
            <span>Luggage</span>
            <strong>2 Bags</strong>
          </div>
        </div>
      </div>

      <!-- Price Details -->
      <div class="price-details">
        <div class="price-row">
          <span>Base Fare</span>
          <span>₹1,500</span>
        </div>
        <div class="price-row">
          <span>Taxes & Fees</span>
          <span>₹150</span>
        </div>
        <div class="price-row total">
          <span>Total Amount</span>
          <span>₹1,650</span>
        </div>
      </div>

      <!-- Features -->
      <div class="cab-features">
        <h4>Included Services</h4>
        <ul>
          <li><i class="fa fa-check"></i> Air Conditioning</li>
          <li><i class="fa fa-check"></i> Professional Driver</li>
          <li><i class="fa fa-check"></i> Bottled Water</li>
          <li><i class="fa fa-check"></i> Mobile Charger</li>
          <li><i class="fa fa-check"></i> Clean Interior</li>
          <li><i class="fa fa-check"></i> 24/7 Support</li>
        </ul>
      </div>

      <!-- Cab Highlights -->
      <div class="cab-highlights">
        <h4>Service Highlights</h4>
        <div class="highlight-grid">
          <div class="highlight-item">
            <i class="fa fa-clock"></i>
            <span>On-Time Pickup</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-shield-alt"></i>
            <span>Safe Journey</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-route"></i>
            <span>Flexible Routes</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-map-marked-alt"></i>
            <span>GPS Tracking</span>
          </div>
        </div>
      </div>

      <!-- Important Notes -->
      <div class="important-notes">
        <h4>Important Notes</h4>
        <div class="notes-content">
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>Waiting charges applicable after 15 minutes</p>
          </div>
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>Toll & parking charges extra</p>
          </div>
          <div class="note-item">
            <i class="fa fa-info-circle"></i>
            <p>Night charges applicable (10 PM - 6 AM)</p>
          </div>
        </div>
      </div>

      <!-- Support Section -->
      <div class="support-section">
        <h4>Need Help?</h4>
        <div class="support-content">
          <i class="fa fa-headset"></i>
          <div>
            <p>24/7 Cab Support</p>
            <a href="tel:+919876543210">+91 9643306786</a>
            <small>Available 24/7 for assistance</small>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .booking-summary {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .cab-banner {
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .cab-type {
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

    .cab-features {
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
            color: #28a745;
            font-size: 12px;
          }
        }
      }
    }

    .cab-highlights {
      padding: 20px;
      border-bottom: 1px solid #eee;

      h4 {
        font-size: 16px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 15px;
      }

      .highlight-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          }

          i {
            font-size: 18px;
            color: #0d6efd;
          }

          span {
            font-size: 13px;
            color: #2c3e50;
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

      .cab-features ul {
        grid-template-columns: 1fr;
      }

      .cab-highlights .highlight-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CabBookingSummaryComponent {}
