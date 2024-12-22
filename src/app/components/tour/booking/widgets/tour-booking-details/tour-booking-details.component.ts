import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tour-booking-details',
    standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tour-summary">
      <!-- Tour Image -->
      <div class="tour-image">
        <img src="assets/imges2/1.jpg" alt="Tour Destination">
        <div class="tour-badge">Best Seller</div>
      </div>

      <!-- Quick Info -->
      <div class="quick-info">
        <div class="info-item">
          <i class="fa fa-clock"></i>
          <div>
            <span>Duration</span>
            <strong>7 Days</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-users"></i>
          <div>
            <span>Group Size</span>
            <strong>2-20 People</strong>
          </div>
        </div>
        <div class="info-item">
          <i class="fa fa-star"></i>
          <div>
            <span>Rating</span>
            <strong>4.8/5</strong>
          </div>
        </div>
      </div>

      <!-- Price Details -->
      <div class="price-details">
        <div class="price-row">
          <span>Base Price</span>
          <span>₹25,000</span>
        </div>
        <div class="price-row">
          <span>Taxes & Fees</span>
          <span>₹2,500</span>
        </div>
        <div class="price-row total">
          <span>Total Amount</span>
          <span>₹27,500</span>
        </div>
      </div>

      <!-- Features -->
      <div class="tour-features">
        <h4>What's Included</h4>
        <ul>
          <li><i class="fa fa-check"></i> Hotel Accommodation</li>
          <li><i class="fa fa-check"></i> Airport Transfers</li>
          <li><i class="fa fa-check"></i> Daily Breakfast</li>
          <li><i class="fa fa-check"></i> Guided Tours</li>
          <li><i class="fa fa-check"></i> All Entry Tickets</li>
          <li><i class="fa fa-check"></i> Local Transport</li>
        </ul>
      </div>

      <!-- Highlights -->
      <div class="tour-highlights">
        <h4>Tour Highlights</h4>
        <div class="highlight-grid">
          <div class="highlight-item">
            <i class="fa fa-camera"></i>
            <span>Photography Tours</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-utensils"></i>
            <span>Local Cuisine</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-mountain"></i>
            <span>Adventure Activities</span>
          </div>
          <div class="highlight-item">
            <i class="fa fa-landmark"></i>
            <span>Cultural Visits</span>
          </div>
        </div>
      </div>

      <!-- Contact Support -->
      <div class="support-section">
        <h4>Need Help?</h4>
        <div class="support-content">
          <i class="fa fa-headset"></i>
          <div>
            <p>24/7 Customer Support</p>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tour-summary {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }

    .tour-image {
      position: relative;
      height: 200px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .tour-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(40, 167, 69, 0.9);
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
          color: #0091FF;
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

    .tour-features {
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
          gap: 8px;
          font-size: 13px;
          color: #2c3e50;

          i {
            color: #28a745;
            font-size: 12px;
          }
        }
      }
    }

    .tour-highlights {
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
            color: #0091FF;
          }

          span {
            font-size: 13px;
            color: #2c3e50;
          }
        }
      }
    }

    .support-section {
      padding: 20px;
      background: #f8f9fa;

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
        background: #fff;
        border-radius: 12px;
        border: 1px solid #eee;

        i {
          font-size: 24px;
          color: #28a745;
        }

        p {
          margin: 0 0 5px;
          font-size: 14px;
          color: #6c757d;
        }

        a {
          color: #0091FF;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .quick-info {
        grid-template-columns: 1fr;
        gap: 15px;
      }

      .tour-features ul {
        grid-template-columns: 1fr;
      }

      .tour-highlights .highlight-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class TourBookingDetailsComponent {}
