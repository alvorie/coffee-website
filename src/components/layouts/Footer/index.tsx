// Footer.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter } from "lucide-react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.divider} />

        <div className={styles.grid}>
          <div className={styles.section}>
            <h3 className={styles.heading}>Bean Beverage</h3>
            <p className={styles.paragraph}>
              Community-driven coffee experiences and workshops for enthusiasts.
            </p>
            <div className={styles.socialGroup}>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.list}>
              <li>123 Brew Street</li>
              <li>Portland, OR 97204</li>
              <li>hello@beanbeverage.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>Stay Updated</h3>
            <p className={styles.paragraph}>
              Join our newsletter for brewing tips and event updates.
            </p>
            <div className={styles.formGroup}>
              <Input type="email" placeholder="Your email" />
              <Button variant="default">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />
      </div>
    </footer>
  );
}
