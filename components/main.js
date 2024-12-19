import { setupAddColumn } from './column.js';
import { setupColumnCardAddition } from './column.js';
import { setupDragAndDrop } from './dragAndDrop.js';
import { setupDropZone } from './dragAndDrop.js';

setupBoardActions();


document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');

    setupAddColumn(board);
    document.querySelectorAll('.column').forEach(setupColumnCardAddition);
    document.querySelectorAll('.column-content').forEach(setupDropZone);
    document.querySelectorAll('.card').forEach(card => {
        card.draggable = true;
        setupDragAndDrop(card);
    });
});