const {statSync, createReadStream} = require('fs');
const Blob = require('.');
const DOMException = require('domexception');

/**
 * @param {string} path filepath on the disk
 * @returns {Blob}
 */
function blobFrom(path) {
	const {size, mtime} = statSync(path);
	const blob = new BlobDataItem({path, size, mtime, start: 0});

	return new Blob([blob]);
}

/**
 * This is a blob backed up by a file on the disk
 * with minium requirement
 *
 * @private
 */
class BlobDataItem {
	constructor(options) {
		this.size = options.size;
		this.path = options.path;
		this.start = options.start;
		this.mtime = options.mtime;
	}

	// Slicing arguments is validated and formated
	// by Blob.prototype.slice
	slice(start, end) {
		return new BlobDataItem({
			path: this.path,
			start,
			mtime: this.mtime,
			size: end - start
		});
	}

	stream() {
		if (statSync(this.path).mtime > this.mtime) {
			throw new DOMException('The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.', 'NotReadableError');
		}

		return createReadStream(this.path, {
			start: this.start,
			end: this.start + this.size - 1
		});
	}

	get [Symbol.toStringTag]() {
		return 'Blob';
	}
}

module.exports = blobFrom;
