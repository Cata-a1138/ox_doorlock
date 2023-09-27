import { Context, createContext, useContext, useState } from 'react';
import { useNuiEvent } from '../hooks/useNuiEvent';
import { debugData } from '../utils/debugData';

debugData([
  {
    action: 'loadLocales',
    data: ['en', 'fr', 'de', 'it', 'es', 'pt-BR', 'pl', 'ru', 'ko', 'zh-TW', 'ja', 'es-MX', 'zh-CN'],
  },
]);

debugData([
  {
    action: 'setLocale',
    data: {
      language: 'English',
      ui: {
        door_actions: 'Door actions',
        settings: 'Settings',
        copy_settings: 'Copy settings',
        settings_copied: 'Settings copied',
        teleport_to_door: 'Teleport to door',
        confirm_delete: 'Confirm deletion',
        confirm_delete_prompt: 'Are you sure you want to delete',
        confirm: 'Confirm',
        cancel: 'Cancel',
        delete: 'Delete row',
        delete_door: 'Delete door',
        id: 'ID',
        name: 'Name',
        zone: 'Zone',
        no_results_found: 'No results found',
        no_such_sound: 'No such sound',
        create_a_new_door: 'Create a new door',
        search: 'Search',
        difficulty: 'Difficulty',
        area_size: 'Area size',
        area_size_description: 'Skill check area size in degrees',
        speed_multiplier: 'Speed multiplier',
        speed_multiplier_description: 'Number the indicator speed will be multiplied by',
        character_id: 'Character Id',
        door_name: 'Door name',
        passcode: 'Passcode',
        autolock_interval: 'Autolock Interval',
        autolock_interval_info: 'Time in seconds after which the door will be locked',
        interact_distance: 'Interact Distance',
        interact_distance_info: 'Controls the distance from which the player can interact with the door',
        door_rate: 'Door Rate',
        door_rate_info: 'Speed the automatic door will move at',
        locked: 'Locked',
        locked_info: 'Sets whether the targeting door is locked by default',
        double: 'Double',
        double_info: 'Enable if the targeting door is a double door',
        dutomatic: 'Automatic',
        dutomatic_info: 'Enable if the targeting door is moving automatically (Garage, poles, etc...)',
        lockpick: 'Lockpick',
        lockpick_info: 'Enables the targeting door to be lockpicked. Can define skill check difficulties in Lockpick tab, otherwise uses config defaults',
        hide_ui: 'Hide UI',
        hide_ui_info: 'Hides UI indicators for the targeting door',
        hold_open: 'Hold Open',
        hold_open_info: 'Sets whether the targeting door(s) should stay open while unlocked',
        grade: 'Grade',
        group: 'Group',
        item: 'Item',
        item_options: 'Item options',
        remove_on_use: 'Remove on use',
        metadata_type: 'Metadata type',
        edit_info: 'Edit row to select value',
        edit: 'Edit row',
        lockpick_difficulty: 'Lockpick difficulty',
        easy: 'Easy',
        medium: 'Medium',
        hard: 'Hard',
        custom: 'Custom',
        lock_sound: 'Lock sound',
        unlock_sound: 'Unlock sound',
        doors: 'Doors',
        general: 'General',
        characters: 'Characters',
        groups: 'Groups',
        items: 'Items',
        sound: 'Sound',
        create_a_new_row: 'Create a new row',
        settings_applied: 'Settings applied',
        confirm_door: 'Confirm door',
        no_door_settings_copied: 'No door settings copied',
        apply_copied_settings: 'Apply copied settings',
        difficulty_required: 'Difficulty is required',
        area_size_required: 'Area size is required',
        speed_multiplier_required: 'Speed multiplier is required'
      },
    },
  },
]);

interface Locale {
  language: string;
  ui: {
    door_actions: string;
    settings: string;
    copy_settings: string;
    settings_copied: string;
    teleport_to_door: string;
    confirm_delete: string;
    confirm_delete_prompt: string;
    confirm: string;
    cancel: string;
    delete: string;
    delete_door: string;
    id: string;
    name: string;
    zone: string;
    no_results_found: string;
    no_such_sound: string;
    create_a_new_door: string;
    search: string;
    difficulty: string;
    area_size: string;
    area_size_description: string;
    speed_multiplier: string;
    speed_multiplier_description: string;
    character_id: string;
    door_name: string;
    passcode: string;
    autolock_interval: string;
    autolock_interval_info: string;
    interact_distance: string;
    interact_distance_info: string;
    door_rate: string;
    door_rate_info: string;
    locked: string;
    locked_info: string;
    double: string;
    double_info: string;
    dutomatic: string;
    dutomatic_info: string;
    lockpick: string;
    lockpick_info: string;
    hide_ui: string;
    hide_ui_info: string;
    hold_open: string;
    hold_open_info: string;
    grade: string;
    group: string;
    item: string;
    item_options: string;
    remove_on_use: string;
    metadata_type: string;
    edit_info: string;
    edit: string;
    lockpick_difficulty: string;
    easy: string;
    medium: string;
    hard: string;
    custom: string;
    lock_sound: string;
    unlock_sound: string;
    doors: string;
    general: string;
    characters: string;
    groups: string;
    items: string;
    sound: string;
    create_a_new_row: string;
    settings_applied: string;
    confirm_door: string;
    no_door_settings_copied: string;
    apply_copied_settings: string;
    difficulty_required: string;
    area_size_required: string;
    speed_multiplier_required: string;
  };
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locales: Locale) => void;
}

const LocaleCtx = createContext<LocaleContextValue | null>(null);

const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>({
    language: '',
    ui: {
      door_actions: '',
      settings: '',
      copy_settings: '',
      settings_copied: '',
      teleport_to_door: '',
      confirm_delete: '',
      confirm_delete_prompt: '',
      confirm: '',
      cancel: '',
      delete: '',
      delete_door: '',
      id: '',
      name: '',
      zone: '',
      no_results_found: '',
      no_such_sound: '',
      create_a_new_door: '',
      search: '',
      difficulty: '',
      area_size: '',
      area_size_description: '',
      speed_multiplier: '',
      speed_multiplier_description: '',
      character_id: '',
      door_name: '',
      passcode: '',
      autolock_interval: '',
      autolock_interval_info: '',
      interact_distance: '',
      interact_distance_info: '',
      door_rate: '',
      door_rate_info: '',
      locked: '',
      locked_info: '',
      double: '',
      double_info: '',
      dutomatic: '',
      dutomatic_info: '',
      lockpick: '',
      lockpick_info: '',
      hide_ui: '',
      hide_ui_info: '',
      hold_open: '',
      hold_open_info: '',
      grade: '',
      group: '',
      item: '',
      item_options: '',
      remove_on_use: '',
      metadata_type: '',
      edit_info: '',
      edit: '',
      lockpick_difficulty: '',
      easy: '',
      medium: '',
      hard: '',
      custom: '',
      lock_sound: '',
      unlock_sound: '',
      doors: '',
      general: '',
      characters: '',
      groups: '',
      items: '',
      sound: '',
      create_a_new_row: '',
      settings_applied: '',
      confirm_door: '',
      no_door_settings_copied: '',
      apply_copied_settings: '',
      difficulty_required: '',
      area_size_required: '',
      speed_multiplier_required: ''
    },
  });

  useNuiEvent('setLocale', async (data: Locale) => setLocale(data));

  return <LocaleCtx.Provider value={{ locale, setLocale }}>{children}</LocaleCtx.Provider>;
};

export default LocaleProvider;

export const useLocales = () => useContext<LocaleContextValue>(LocaleCtx as Context<LocaleContextValue>);
