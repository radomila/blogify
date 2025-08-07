import { Dispatch, ReactNode, SetStateAction } from 'react';
import { SelectEnum } from '@/types/SelectEnum';

export interface CommonDocumentProps {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
}

export interface AboutSectionType {
  imageAlign: 'left' | 'right';
  title: string;
  description: string;
  img: string;
}

export interface SearchBarProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export interface SortSelectProps {
  sortOrder: SelectEnum;
  setSortOrder: (sortOrder: SelectEnum) => void;
}

export interface ChildrenProps {
  children: ReactNode;
}
