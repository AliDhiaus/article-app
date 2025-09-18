import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const PreviewModal = ({ previewData, open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Preview Artikel</DialogTitle>
        </DialogHeader>
        {previewData && (
          <div className="mt-2 space-y-2">
            <p>
              <strong>Title:</strong> {previewData.title}
            </p>
            <p>
              <strong>Content:</strong>
            </p>
            <div
              className="p-2 bg-gray-100 rounded"
              dangerouslySetInnerHTML={{ __html: previewData.content }}
            />
            <p>
              <strong>Category ID :</strong> {previewData.categoryId}
            </p>
            {previewData.imageUrl && (
              <img
                src={previewData.imageUrl}
                alt="Preview"
                className="mt-2 rounded max-w-full h-54"
              />
            )}
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;
