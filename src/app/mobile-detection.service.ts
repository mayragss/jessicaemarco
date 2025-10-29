import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileDetectionService {

  constructor() { }

  isMobileDevice(): boolean {
    // Check user agent for phones only (exclude tablets)
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Exclude tablets (iPad, Android tablets)
    const isTablet = /ipad|tablet|playbook|silk|(android(?!.*mobile))/i.test(userAgent);
    if (isTablet) {
      return false;
    }
    
    // Check for phone devices only
    const isPhone = /android|webos|iphone|ipod|blackberry|iemobile|opera mini|mobile/i.test(userAgent);
    
    // Additional check: screen width should be less than 600px for phones
    const hasSmallScreen = window.innerWidth < 600;
    
    // Additional check for touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Return true only if it's a phone (not tablet) and has small screen
    return isPhone && hasSmallScreen && isTouchDevice;
  }

  getScreenWidth(): number {
    return window.innerWidth;
  }

  getScreenHeight(): number {
    return window.innerHeight;
  }
}


