import { setupColumnCardAddition, setupDropZone } from './column.js';
import { setupDragAndDrop } from './card.js';

export function setupExistingColumns(board) {
    document.querySelectorAll('.column').forEach(setupColumnCardAddition);
    document.querySelectorAll('.column-content').forEach(setupDropZone);
    document.querySelectorAll('.card').forEach(card => {
        card.draggable = true;
        setupDragAndDrop(card);
    });
}