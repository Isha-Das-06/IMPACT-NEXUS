
// Added import to resolve 'React.ReactNode' namespace error
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}

export interface Program {
  title: string;
  purpose: string;
  scope: string;
  community: string;
  outcomes: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  type: 'core' | 'volunteer' | 'contributor';
}